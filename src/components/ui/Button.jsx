export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    disabled = false,
    onClick,
    type = 'button',
    className = ''
}) {
    const baseStyles = 'font-semibold rounded-full transition-all duration-300 flex items-center justify-center';

    const variants = {
        primary: 'bg-gradient-to-r from-red-600 to-orange-500 text-white hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100',
        secondary: 'bg-white text-gray-900 border-2 border-gray-300 hover:border-red-600 hover:text-red-600 disabled:opacity-50 disabled:cursor-not-allowed',
        outline: 'bg-transparent border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    const widthClass = fullWidth ? 'w-full' : '';

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
        >
            {children}
        </button>
    );
}
