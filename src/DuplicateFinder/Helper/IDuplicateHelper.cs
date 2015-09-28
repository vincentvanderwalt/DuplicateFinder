using DuplicateFinder.Models;

namespace DuplicateFinder.Helper
{
    public interface IDuplicateHelper
    {
        FindDuplicateModel FindDuplicates(string inputString);
    }
}
