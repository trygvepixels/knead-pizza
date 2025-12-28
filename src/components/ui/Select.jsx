export default function Select({
    label,
    name,
    value,
    onChange,
    options,
    required = false,
    error,
    disabled = false,
    className = '',
}) {
    return (
        <div className={className}>
            {label && (
                <label htmlFor={name} className="block text-sm font-semibold text-gray-700 mb-2">
                    {label}
                    {required && <span className="text-red-600 ml-1">*</span>}
                </label>
            )}
            <select
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                disabled={disabled}
                className={`w-full px-4 py-3 bg-white border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed ${error ? 'border-red-500' : 'border-gray-300'
                    }`}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {error && (
                <p className="mt-1 text-sm text-red-600">{error}</p>
            )}
        </div>
    );
}
