using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI.Models
{
    public class Message
    {
        public string title { get; set; }
        public string text { get; set; }
        public string icon { get; set; }

        public string console { get; set; }
    }
}