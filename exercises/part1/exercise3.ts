{
  // Bonus exercise

  // Extend Todo to support ARBITRARILY additional properties
  type Todo =
    | {
        title: string;
        done: boolean;
        description?: string;
      }
    | {};

  // Ok:
  const x: Todo = {
    title: 'test',
    done: false,
    author: 'you',
  };

  const x2: Todo = {
    title: 'test',
    done: false,
    dueDate: new Date(),
  };

  // Not ok:
  const y: Todo = {};

  const z: Todo = {
    title: 'test',
    done: 'nope',
    description: 3,
    author: 'you',
  };
}
