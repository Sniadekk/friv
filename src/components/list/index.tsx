import React, { useState } from "react";
import cx from "classnames";
import { useTranslation } from "react-i18next";
import { Button } from "components/button";
import { rangeUntil } from "utils";

type Props<T> = {
  // Function used to render single item in the list
  renderItem: (data: T, index: number) => JSX.Element;
  // Data to render
  items: T[];
  // Number of items per page
  itemsPerPage: number;
  className?: string;
  // Message to display whenever empty array of items is passed to the component
  emptyText?: string;
};

// Component rendering paginated list of items
export const List = <T,>({
  className = "",
  items,
  renderItem,
  itemsPerPage,
  emptyText
}: Props<T>): JSX.Element => {
  const { t } = useTranslation();

  const [currentPage, setPage] = useState(1);

  const nextPage = () => setPage(currentPage + 1);
  const prevPage = () => setPage(currentPage - 1);

  const pagesAmount = Math.round(items.length / itemsPerPage);
  const nextDisabled = currentPage + 1 >= pagesAmount;
  const prevDisabled = currentPage === 1;

  const PageButtons = () => (
    <>
      {rangeUntil(currentPage, pagesAmount, 5).map((index) => (
        <Button
          key={`page-button-${index}`}
          className={cx("list__button", {
            "list__button--active": index === currentPage
          })}
          onClick={() => {
            setPage(index);
          }}
        >
          {index}
        </Button>
      ))}
    </>
  );

  const isEmpty = items.length > 0;

  return (
    <div className={cx("list", className)}>
      <div className="list__items">
        {isEmpty ? (
          items.slice(currentPage, currentPage + itemsPerPage).map(renderItem)
        ) : (
          <div className="list__empty"> {emptyText} </div>
        )}
      </div>
      {isEmpty && (
        <div className="list__pagination">
          <Button
            className="list__button"
            disabled={prevDisabled}
            onClick={prevPage}
          >
            {t("list.back")}
          </Button>
          <PageButtons />
          <Button
            className="list__button"
            disabled={nextDisabled}
            onClick={nextPage}
          >
            {t("list.next")}
          </Button>
        </div>
      )}
    </div>
  );
};
