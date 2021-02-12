using API.Errors;
using Infrastructure.Data;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BuggyController : BaseAPIController
    {
        private readonly StoreContext _context;
        public BuggyController(StoreContext context)
        {
            this._context = context;
        }

        [HttpGet("notfound")]
        public ActionResult GetNotFoundRequest()
        {
            return NotFound(new APIResponse(404));
        }
        [HttpGet("servererror")]
        public ActionResult GetServerError()
        {
            return BadRequest(new APIResponse(500));
        }
        [HttpGet("badrequest")]
        public ActionResult GetBadRequest()
        {
            return BadRequest(new APIResponse(400));
        }
        [HttpGet("badrequest/{id}")]
        public ActionResult GetBadRequestId(int id)
        {
            return BadRequest();
        }
    }
}