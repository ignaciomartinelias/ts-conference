{
  // TIP: use generics!

  // Write the type for assign, replace the `any`s
  function fla<T, V>(object1: T, object2: V): T & V {
    throw 'Not implemented'; // ignore this line
  }

  {
    // Ok
    const x = fla({ a: 1, b: 2 }, { b: 2, c: false });

    x.a = 3;
    x.b = 3;
    x.c = false;

    const y = fla({ z: 'hi' }, { lolCat: { meow: true } });
    y.z = 'hello';
    y.lolCat.meow = false;

    // Not ok
    x.d = 1;
    x.c = 'test';
  }
}
