const strContains = (stringFirst, stringSecond) => {
    if (stringFirst.toLowerCase().includes(stringSecond.toLowerCase()))
        return true

        else return false
  };

export default strContains;