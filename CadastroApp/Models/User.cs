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
        public long Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public Date BirthDate { get; set; }
        public string PictureUrl { get; set; }

        public User(long id, string name, string email, Date birthDate, string pictureUrl)
        {
            Id = id;
            Name = name;
            Email = email;
            BirthDate = birthDate;
            PictureUrl = pictureUrl;
        }

        public User(long idUser, string name, string email, long idDate, string birthDate, string pictureUrl)
        {
            Id = idUser;
            Name = name;
            Email = email;
            BirthDate = new Date(idDate, birthDate);
            PictureUrl = pictureUrl;
        }
    }
}