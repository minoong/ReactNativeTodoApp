import AsyncStorage from '@react-native-community/async-storage';

const key = 'todos';

const todosStorage = {
  async get() {
    try {
      const rwaTodos = await AsyncStorage.getItem('todos');

      if (!rwaTodos) {
        throw new Error('no saved todos.');
      }

      const savedTodos = JSON.parse(rwaTodos);

      return savedTodos;
    } catch (e) {
      console.error(e);
    }
  },
  async set(data) {
    try {
      await AsyncStorage.setItem('todos', JSON.stringify(data));
    } catch (e) {
      console.error(e);
    }
  },
};

export default todosStorage;
