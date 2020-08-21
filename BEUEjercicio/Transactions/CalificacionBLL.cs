using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BEUEjercicio.Transactions
{
    public class CalificacionBLL
    {
        public static void Create(Calificacion a, bool byForEach)
        {
            using (Entities db = new Entities())
            {
                using (var transaction = db.Database.BeginTransaction())
                {
                    try
                    {
                        Config(a, byForEach);
                        db.Calificacions.Add(a);
                        db.SaveChanges();
                        transaction.Commit();
                    }
                    catch (Exception ex)
                    {
                        transaction.Rollback();
                        throw ex;
                    }
                }
            }
        }

        private static void Config(Calificacion calif, bool byForEach)
        {
            calif.fecha = DateTime.Now;
            calif.valor = 0;

            if (byForEach)
            {
                foreach (var ap in calif.Aporte)
                {
                    ap.puntaje = (ap.valor * ap.ponderante) / 20;
                    calif.valor += ap.puntaje;
                }
                return;
            }

            calif.Aporte.ToList().ForEach(ap => ap.puntaje = (ap.valor * ap.ponderante) / 20);
            calif.valor = calif.Aporte.Sum(ap => ap.puntaje);

        }

        public static Calificacion Get(int? id)
        {
            Entities db = new Entities();
            return db.Calificacions.Find(id);
        }


        public static List<Calificacion> List(int id)
        {
            Entities db = new Entities();
            return db.Calificacions.Where(x => x.idmatricula == id).ToList();
        }
    }
}
