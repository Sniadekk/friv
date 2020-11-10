import React, { useState, useRef } from "react";
import cx from "classnames";
import { useTranslation } from "react-i18next";
import { Option } from "utils";
import { useOnClickOutside } from "utils/hooks";

export type SelectOption = {
  // Label that is gonna be displayed in the drop down menu item
  label: string;
  // Value that is gonna be send to the onSelect function whenever item is selected
  value: string;
};

type Props = {
  className?: string;
  // Options to render in the drop down menu
  options: SelectOption[];
  // Function fired whenever one of the items is selected
  onSelect: (selected: SelectOption) => void;
};

export const Select: React.FC<Props> = ({ className, options, onSelect }) => {
  const { t } = useTranslation();
  const [filterBy, setFilter] = useState("");

  const [selected, setSelected] = useState(Option.none<SelectOption>());

  const [optionsOpened, setOptionsOpen] = useState(false);
  const filtered = options.filter((o) =>
    o.value.toLowerCase().includes(filterBy.toLowerCase())
  );

  const selectOption = (option: SelectOption) => {
    setSelected(Option.some(option));
    setFilter("");
    setOptionsOpen(false);
    onSelect(option);
  };

  const filter = (newFilter: string) => {
    // Ensure that user doesn't hide the options by accident while typing
    if (!optionsOpened) {
      setOptionsOpen(true);
    }
    setSelected(Option.none());
    setFilter(newFilter);
  };

  const Empty = () => <div className="select__empty">{t("select.empty")}</div>;
  const Items = () => (
    <>
      {filtered.map((option) => (
        <div
          role="button"
          tabIndex={0}
          onClick={() => {
            selectOption(option);
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              selectOption(option);
            }
          }}
          className="select__option"
        >
          {option.label}
        </div>
      ))}
    </>
  );

  const Options = () => (
    <div
      className={cx("select__options", {
        "select__options--open": optionsOpened
      })}
    >
      {filtered.length > 0 ? <Items /> : <Empty />}
    </div>
  );

  const containerRef = useRef(null);
  useOnClickOutside(containerRef, () => setOptionsOpen(false));

  return (
    <div className={cx("select", className)} ref={containerRef}>
      <input
        onClick={() => setOptionsOpen(!optionsOpened)}
        onKeyDown={(e) => {
          if (e.keyCode === 8) {
            if (selected.isSome()) {
              setSelected(Option.none());
            }
          }
        }}
        className="select__input"
        type="text"
        value={selected.map((option) => option.label).getOr(filterBy)}
        onChange={(e) => {
          filter(e.target.value);
        }}
      />
      <Options />
    </div>
  );
};
