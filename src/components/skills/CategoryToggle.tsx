interface CategoryToggleProps {
  categories: string[];
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  isDark: boolean;
  isVisible: boolean;
}

export const CategoryToggle: React.FC<CategoryToggleProps> = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange, 
  isDark,
  isVisible
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
      <button
        onClick={() => onCategoryChange(null)}
        className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-sm sm:text-base font-medium transition-all duration-500 ${
          selectedCategory === null
            ? 'bg-blue-500 text-white shadow-lg transform scale-105'
            : isDark
            ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
      >
        All
      </button>
      {categories.map((category, index) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-sm sm:text-base font-medium transition-all duration-500 ${
            selectedCategory === category
              ? 'bg-blue-500 text-white shadow-lg transform scale-105'
              : isDark
              ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
          style={{ transitionDelay: `${(index + 1) * 100}ms` }}
        >
          {category}
        </button>
      ))}
    </div>
  );
};