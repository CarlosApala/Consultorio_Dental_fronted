/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
import { LoginServer} from '../../../../../src/lib/features/login/data/datasources/login_service';
import {UserSingleton} from '../../../../../src/lib/core/service/userSingleton'
import axios from 'axios'
import * as E from 'fp-ts/Either'

const respuesta = {
    status: 'success',
    message: 'Usuario autenticado exitosamente',
    data: {
      user: {
        id: '1',
        username: 'usuario123',
        email: 'usuario@example.com',
      },
      token: 'token_de_prueba',
    },
  };
  
jest.mock('axios')
describe('login', () => {
    beforeEach(()=>{
      const userSingleton = UserSingleton.getInstance();
      userSingleton.setUserResponse(respuesta);
    })
    it('debe simular una llamada a Axios y dar una respuesta preconfigurada', async () => {
      // Configuramos la respuesta preconfigurada
      const mockUser= {
        email: 'usuario@example.com',
        password: 'contraseña',
        // otros campos...
      };
  
      // Configuramos el mock de Axios para devolver la respuesta preconfigurada
      axios.post.mockResolvedValue({
        data: respuesta,
      });
  
      // Llamamos a la función login
      let loginServer=new LoginServer();
      
      const result = await loginServer.login('usuario@example.com', 'contraseña');
  
      // Comprobamos que la función haya devuelto la respuesta preconfigurada
      const userSingleton = UserSingleton.getInstance();
    expect(userSingleton.getUserResponse()).toEqual(respuesta);
    
    expect(result).toEqual(E.right(respuesta));
    });
    it('debería manejar errores y devolver un Either.left en caso de error', async () => {
      const loginServer = new LoginServer();
  
      // Configura el mock de Axios para simular una respuesta de error
      axios.post.mockRejectedValue(new Error('Error de prueba'));
  
      const result = await loginServer.login('correo@example.com', 'contraseña123');
  
      // Verifica que la función login devuelva un Either.left con el mensaje de error
      
      expect(result.left).toBe('error desconocido');
    });
  });