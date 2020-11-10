import { render, screen } from "@testing-library/react";
import React from "react";

import { List } from "./index";

jest.mock("react-i18next", () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {})
      }
    };
  }
}));

test("List renders correct number of list items", () => {
  const items = ["foo", "bar", "foo", "bar", "foo", "bar"];

  render(
    <List
      items={items}
      renderItem={(value, index) => <div key={index}>LIST ITEM</div>}
      itemsPerPage={3}
    />
  );

  // Renders correct number of list items
  expect(screen.getAllByText("LIST ITEM").length).toBe(3);
});
