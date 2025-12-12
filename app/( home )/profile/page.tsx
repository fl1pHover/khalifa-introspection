import UserInformation from "@/component/user-information";

export default function Page() {
  // ATTENTION
  // const router = useRouter();

  // useEffect(() => {
  //   if (!isPending && !session?.user) {
  //     router.push("/sign-in");
  //   }
  // }, [isPending, session, router]);

  // if (isPending)
  //   return <p className="text-center mt-8 text-white">Loading...</p>;
  // if (!session?.user)
  //   return <p className="text-center mt-8 text-white">Redirecting...</p>;

  // const { user } = session;

  // console.log(session.user);

  return <UserInformation />;
}
