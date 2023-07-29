//Здесь содержаться методы для валидации инпута поиска

export const handleValidationTextInputRequired = (input) => {
  if (input.length > 195 || !input.trim()) {
    return false;
  } else {
    return true;
  }
};
