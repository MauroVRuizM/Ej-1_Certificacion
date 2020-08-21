using BEUEjercicio;
using BEUEjercicio.Transactions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;

namespace WebAPI.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class CalificacionController : ApiController
    {

        // POST api/Calificacion
        public IHttpActionResult Post(Calificacion calificacion) // =>  Master/Detail
        {
            try
            {
                CalificacionBLL.Create(calificacion, true);
                return Content(HttpStatusCode.Created, "Calificación creada correctamente");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }   
    }
}
