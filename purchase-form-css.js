:root {
  --wrapper-border-radius: 12px;
  --wrapper-padding: 12px;
  --wrapper-background-color: #e0e0e0;

  --circle-width: 30px;
  --circle-radius: calc(var(--circle-width) / 2);
  --circle-border-width: 4px;
  --circle-bottom-margin: 8px;
  --circle-font-size: 24px;

  --selected-background-color: #279600;

  --divider-line-height: 4px;

  --product-offering-height: 40px;
  --product-offering-padding: 12px;
  --product-offering-vertical-margin: 12px;
  --product-offering-border-radius: 8px;
  --product-offering-left-border-size: 5px;

  --label-left-margin: 4px;
  --blue-product-color: #626ee3;
  --red-product-color: #890023;
  --orange-product-color: #f37f1b;
  --green-product-color: #11967e;

  --button-padding: 12px;
  --button-font-size: 16px;
  --button-border-radius: 8px;
  --button-background-color: #02203c;
}

/*  Write your code here. */

#wrapper {
  padding: var(--wrapper-padding);
  border-radius: var( --wrapper-border-radius);
  background-color: var(--wrapper-background-color);
}

li {
  list-style-type: none;
}

ol {
  display: flex;
  padding: 0;
  counter-reset: list-items;
/*   justify-content: space-around; */
}

ol li {
  position: relative;
  text-align: center;
  flex-basis: 100%;
}

ol li::before {
  counter-increment: list-items;
  content: counter(list-items);
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--circle-width);
  height: var(--circle-width);
  background-color: white;
  font-size: var(--circle-font-size);
  border-radius: 50%;
  border: var(--circle-border-width) solid black;
  margin: 0 auto var(--circle-bottom-margin) auto
}

.selected::before {
  color: white;
  background-color: var(--selected-background-color);
}

ol li:not(:first-of-type)::after {
  content: "";
  display: block;
  width: calc(100% - var(--circle-width));
  height: var(--divider-line-height);
  background-color: black;
  position: absolute;
  left: calc(-50% + var(--circle-radius));
  top: calc(var(--circle-radius) + var(--circle-border-width) - var(--divider-line-height) /2)
}