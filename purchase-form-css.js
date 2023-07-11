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
  padding: 12px;
  border-radius: 12px;
  background-color: #e0e0e0;
}

ol {
  display: flex;
  justify-content: space-around;
  list-style-type: none;
}

.selected {
  
}

.selected li:before {
  content: counter(custom-counter);
  counter-increment: custom-counter;
  display: inline-block;
  width: 25px; /* Adjust the size of the circle */
  height: 25px; /* Adjust the size of the circle */
  border: 2px solid #000; /* Adjust the border width and color */
  border-radius: 50%; /* Create a circle */
  text-align: center;
  line-height: 25px; /* Center the number vertically */
  background-color: #f00; /* Set the fill color */
  color: #fff; /* Set the text color */
  font-weight: bold;
  margin-right: 5px; /* Add some spacing between the circle and the content */
}