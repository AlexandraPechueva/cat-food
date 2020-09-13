export function setClassName(defaultClassName, isSelected, isDisabled) {
    let cardClassName = defaultClassName;

    if (isDisabled) {
        cardClassName = `${defaultClassName} ${isDisabled ? `${defaultClassName}_disabled` : ''}`;
    }
    else {
        if (isSelected) {
            cardClassName = `${defaultClassName} ${isSelected ? `${defaultClassName}_selected` : ''}`;
        }
    }

    return cardClassName;
}
