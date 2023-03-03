using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using StudentsBE.Context;
using StudentsBE.DTO;

namespace StudentsBE.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class StudentController : Controller
    {
        private readonly ContextDB _dbContext;

        public StudentController(ContextDB dbContext)
        {
            _dbContext = dbContext;
        }

        
        // POST: StudentController/Create
        [HttpPost]
        public ActionResult Create([FromBody] StudentDto input)
        {
            try
            {
        var student = mapper.Map<StudentDto>(studentDto);
        _dbContext.Add(student);
                _dbContext.SaveChanges();

                return Ok();
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
    }
}
