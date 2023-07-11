/* Write your code here. */

.head {
  position: relative;
  height: 200px;
  width: 200px;
  background-color: #ffc0cb;
  border-radius: 50%;
  margin-top: 20px;
  border: 5px solid black;

}

.ear {
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: #ffc0cb;
  border-radius: 50%;
  z-index: -1;
  border: 5px solid black;
  top: -10px
}

.ear:first-child {
  left: 10px;
}

.ear:nth-child(2) {
  right: 10px;
}

.eye {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  top: 40px;
  border: 2px solid black;

}

.eye:first-child {
  left: 30px;
}

.eye:nth-child(2) {
  right: 30px;
}

.pupil {
  background-color: black;
  width: 50%;
  height: 50%;
  border-radius: 50%;
}

.nose {
  width: 100px;
  height: 60px;
  background-color: #f57187;
  border-radius: 35%;
  position: absolute;
  display: flex;
  justify-content: space-around;
  align-items: center;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  border: 2px solid black;
}

.nostril {
  height: 50%;
  width: 25%;
  background-color: black;
  border-radius: 50%
}



