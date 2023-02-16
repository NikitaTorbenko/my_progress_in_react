const InputText = ({min, max}) => {
  const myEvent = ({ target }) => {
    if (target.value.length < min) {
        console.log(`Вам нужно ввести минимум ${min} символа`)
    } else if (target.value.length > max) {
        console.log(`Нельзя ввести больше чем ${max}`)
    }
  };

  return <input type="text" onChange={myEvent} />;
};

export default InputText;
