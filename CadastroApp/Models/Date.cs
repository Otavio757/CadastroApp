using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace CadastroApp.Models
{
    [Table("date")]
    public class Date
    {
        [Key]
        public long Id { get; set; }
        public int Day { get; set; }
        public int Month { get; set; }
        public int Year { get; set; }

        public Date(long id, int day, int month, int year)
        {
            Id = id;
            Day = day;
            Month = month;
            Year = year;
        }

        public Date(long id, string date)
        {
            Id = id;

            string[] dateElements = date.Split('-');
            Day = int.Parse(dateElements[0]);
            Month = int.Parse(dateElements[1]);
            Year = int.Parse(dateElements[2]);
        }

        public override string ToString()
        {
            return Day + "/" + Month + "/" + Year;
        }
    }
}