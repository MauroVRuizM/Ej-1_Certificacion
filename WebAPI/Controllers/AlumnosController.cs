using BEUEjercicio;
using BEUEjercicio.Transactions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;

namespace WebAPI.Controllers
{
    public class AlumnosController : ApiController
    {
        [ResponseType(typeof(Alumno))]
        public IHttpActionResult Get()
        {
            List<Alumno> todos = AlumnoBLL.List();
            return Json(todos);
        }
    }
}
