const init = () => {
  const hobby = "Learning JavaScript";

  const displayHobby = () => {
    console.log(hobby);
  };

  return displayHobby;
};

const displayFunc = init();
displayFunc();
