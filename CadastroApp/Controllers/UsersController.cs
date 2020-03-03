using CadastroApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CadastroApp.Controllers
{
    public class UsersController : ApiController
    {
        private static List<User> Users = new List<User>();
        private long NextId = 0; //Salva o ID do próximo usuário a ser inserido na lista

        //Como não há métodos para remover usuários, o ID sempre corresponderá à posição na lista
        [Route("api/users/getuser/{id}")]
        public User GetUser(int id)
        {
            return Users[id];
        }

        [Route("api/users/getusers")]
        public User[] GetUsers()
        {
            return Users.ToArray();
        }

        //Eu segui um tutorial do Stack Overflow para passar múltiplos parâmetros em uma requisição mas não funcionou e o tempo estava meio apertado para pesquisar melhor
        [HttpPost]
        [Route("api/users/adduser")]
        public void AddUser(string name, string email, string birthDate, string pictureUrl)
        {
            User newUser = new User(NextId, name, email, NextId, birthDate, pictureUrl);
            Users.Add(newUser);
            NextId++;
        }

        //Retorna uma lista de usuários que estão relacionados à palavra-chave
        [HttpGet]
        [Route("api/users/searchuser")]
        public User[] SearchUserByNameOrEmail(string keyword)
        {
            List<User> result = new List<User>();

            foreach (User user in Users)
            {
                if (user.Name.Contains(keyword) || user.Email.Contains(keyword))
                {
                    result.Add(user);
                }
            }
            return result.ToArray();
        }

        //Não é necessário preencher todos os parâmetros de moficiação, colocar null ou deixar a string vazia nos que não deseja editar
        //Mas o id é obrigatório
        public void EditUser(int id, string newName, string newEmail, string newBirthDate, string newPictureUrl)
        {
            if (!string.IsNullOrWhiteSpace(newName))
            {
                Users[id].Name = newName;
            }

            if (!string.IsNullOrWhiteSpace(newEmail))
            {
                Users[id].Email = newEmail;
            }

            if (!string.IsNullOrWhiteSpace(newBirthDate))
            {
                Users[id].BirthDate = new Date(id, newBirthDate);
            }

            if (!string.IsNullOrWhiteSpace(newPictureUrl))
            {
                Users[id].BirthDate = new Date(id, newPictureUrl);
            }
        }
    }
}
