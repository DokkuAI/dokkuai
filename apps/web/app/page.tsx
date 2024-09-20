import {User} from '@repo/types'

export default function Home() {
  const obj:User = {firstName:"A", lastName:"K"};
    return (
    <div>{obj.firstName}</div>
  );
}
