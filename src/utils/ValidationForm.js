//Здесь содержаться методы для валидации инпута поиска

export const handleValidationTextInputRequired = (input) => {
  if (input.length > 25 || !input.trim()) {
    return false;
  } else {
    return true;
  }
};
