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
    public class TiposBecasController : ApiController
    {

        // POST api/TiposBecas
        public IHttpActionResult Post(TiposBeca tiposBeca)
        {
            try
            {
                TiposBecaBLL.Create(tiposBeca);
                return Content(HttpStatusCode.Created, "TiposBeca creado correctamente");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        public IHttpActionResult Put(TiposBeca tiposBeca)
        {
            try
            {
                TiposBecaBLL.Update(tiposBeca);
                return Content(HttpStatusCode.OK, "TiposBeca actualizado correctamente");

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        public IHttpActionResult Get()
        {
            try
            {
                List<TiposBeca> todos = TiposBecaBLL.List();
                return Content(HttpStatusCode.OK, todos);
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex);
            }
        }

        public IHttpActionResult Get(int id)
        {
            try
            {
                TiposBeca result = TiposBecaBLL.Get(id);
                if (result == null)
                {
                    return NotFound();
                }
                return Content(HttpStatusCode.OK, result);
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex);
            }
        }

        public IHttpActionResult Delete(int id)
        {
            try
            {
                TiposBecaBLL.Delete(id);
                return Ok("TiposBeca eliminado correctamente");
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex);
            }
        }
    }
}
