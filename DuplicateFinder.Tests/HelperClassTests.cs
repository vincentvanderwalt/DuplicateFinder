using Xunit;
using DuplicateFinder.Helper;

namespace DuplicateFinder.Tests
{
    public class HelperClassTests
    {
        [Theory]
        [InlineData("AABBCC", "ABC")]        
        public void Test1(string input,string expectedResult)
        {
            var helper = new DuplicateHelper();
            var result = helper.FindDuplicates(input);
            Assert.Equal(expectedResult, result.TextValue);
        }

        [Theory]
        [InlineData("TTES", "T")]
        public void Test2(string input, string expectedResult)
        {
            var helper = new DuplicateHelper();
            var result = helper.FindDuplicates(input);
            Assert.Equal(expectedResult, result.TextValue);
        }

        [Theory]
        [InlineData("Test", "No duplicates found")]
        public void Test3(string input, string expectedResult)
        {
            var helper = new DuplicateHelper();
            var result = helper.FindDuplicates(input);
            Assert.Equal(expectedResult, result.TextValue);
        }

        [Theory]
        [InlineData("AaBbCC", "C")]
        public void Test4(string input, string expectedResult)
        {
            var helper = new DuplicateHelper();
            var result = helper.FindDuplicates(input);
            Assert.Equal(expectedResult, result.TextValue);
        }

        [Theory]
        [InlineData("12333445", "34")]
        public void Test5(string input, string expectedResult)
        {
            var helper = new DuplicateHelper();
            var result = helper.FindDuplicates(input);
            Assert.Equal(expectedResult, result.TextValue);
        }

        [Theory]
        [InlineData("11111111122222222333344445556", "12345")]
        public void Test6(string input, string expectedResult)
        {
            var helper = new DuplicateHelper();
            var result = helper.FindDuplicates(input);
            Assert.Equal(expectedResult, result.TextValue);
        }

        [Theory]
        [InlineData("AAA", "A")]
        public void Test7(string input, string expectedResult)
        {
            var helper = new DuplicateHelper();
            var result = helper.FindDuplicates(input);
            Assert.Equal(expectedResult, result.TextValue);
        }

        [Theory]
        [InlineData("!_£!_£V", "!_£")]
        public void Test8(string input, string expectedResult)
        {
            var helper = new DuplicateHelper();
            var result = helper.FindDuplicates(input);
            Assert.Equal(expectedResult, result.TextValue);
        }

        [Theory]
        [InlineData(" ", "No duplicates found")]
        public void Test9(string input, string expectedResult)
        {
            var helper = new DuplicateHelper();
            var result = helper.FindDuplicates(input);
            Assert.Equal(expectedResult, result.TextValue);
        }
    }
}
