export const Buttons = ({ isSelected, children, onSelect}) => {
    return (
        <button 
            className={isSelected ? 'active' : 'cta-button'}
            onClick={onSelect}
        >
            {children}
        </button>
    )
}
