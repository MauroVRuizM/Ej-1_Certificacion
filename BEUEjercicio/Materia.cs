//------------------------------------------------------------------------------
// <auto-generated>
//     Este código se generó a partir de una plantilla.
//
//     Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//     Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace BEUEjercicio
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;

    public partial class Materia
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Materia()
        {
            this.Matriculas = new HashSet<Matricula>();
        }

        [ScaffoldColumn(false)]
        public int idmateria { get; set; }

        [DataType(DataType.Text)]
        [Required(ErrorMessage = "El Nombre es requerido"), MaxLength(55)]
        [Display(Name = "Nombre")]
        public string nombre { get; set; }

        [DataType(DataType.PhoneNumber)]
        [Required(ErrorMessage = "El NRC es requerido")]
        [Display(Name = "NRC")]
        public string nrc { get; set; }

        [Range(2, 10, ErrorMessage = "El número de créditos debe ser entre 2 y 10")]
        [Required(ErrorMessage = "Los créditos  son requeridos")]
        [Display(Name = "Créditos")]
        public Nullable<short> creditos { get; set; }

        [Required(ErrorMessage = "El Área es requerida")]
        [Display(Name = "Área")]
        public Nullable<int> idarea { get; set; }
    
        public virtual Area Area { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Matricula> Matriculas { get; set; }
    }
}
