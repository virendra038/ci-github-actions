const attack = (animal, isHarmful) => {
  return `${animal} is ${isHarmful ? `harmful` : `not harmful`}`;
};

module.exports = attack;
