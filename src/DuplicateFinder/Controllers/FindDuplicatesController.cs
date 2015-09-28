using Microsoft.AspNet.Mvc;
using DuplicateFinder.Helper;
using DuplicateFinder.Models;

namespace DuplicateFinder.Controllers
{
    [Route("api/[controller]")]
    public class FindDuplicatesController : Controller
    {
        private IDuplicateHelper _duplicateHelper;

        public FindDuplicatesController(IDuplicateHelper duplicateHelper)
        {
            _duplicateHelper = duplicateHelper;
        }
        [HttpPost]
        public FindDuplicateModel Post([FromBody]FindDuplicateModel input)
        {
            if (input == null)
            {
                return new FindDuplicateModel { TextValue = "Input text was null" };
            }   
            return _duplicateHelper.FindDuplicates(input.InputValue);
        }
        
    }
}
