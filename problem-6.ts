{
    //

    const updateProfile = <T>(profile: T, update: Partial<T>): T => {

        return { ...profile, ...update };
    }

    interface User {
        name: string;
        age: number;
        email: string;
    }


    const myProfile: User = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(updateProfile<User>(myProfile, { age: 27}));


    //
}