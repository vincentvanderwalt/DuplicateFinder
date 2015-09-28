using DuplicateFinder.Models;
using System.Linq;

namespace DuplicateFinder.Helper
{
    public class DuplicateHelper : IDuplicateHelper
    {
        public FindDuplicateModel FindDuplicates(string inputString)
        {
            var outputString = inputString.GroupBy(character => character)
                .Where(group => group.Count() > 1)
                .Select(item => item.Key);

            var result = string.Join("", outputString);

            if (string.IsNullOrEmpty(result))
            {
                result = "No duplicates found";
            }

            return new FindDuplicateModel { TextValue = result };
        }
    }
}
