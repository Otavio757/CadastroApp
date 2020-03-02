using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace CadastroApp.Models
{
    [Table("user")]
    public class User
    {
        [Key]
        public long ID { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public Date BirthDate { get; set; }

        public User(string name, string email, Date birthDate)
        {
            Name = name;
            Email = email;
            BirthDate = birthDate;
        }

        public override string ToString()
        {
            return "Nome: " + Name + "\nE-mail: " + Email + "\nData de Nascimento: " + BirthDate;
        }
    }
}