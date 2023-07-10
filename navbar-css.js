nav {
  background-color: #6e072d;
  color: white;
  display: flex;
  font-size: 18px;
  justify-content: space-between;
}

ul {
  display: flex;
  padding: 0;
  margin: 0;
}

li {
  display: inline;
  padding: 1em 1.5em;
  list-style-type: none;
  cursor: pointer;
}

li:not(:last-of-type) {
  border-right: 2px solid white
}

li:hover {
  background-color: #b90e4d;
}