"use client"

export default function Home() {
  // const name = localStorage.getItem("auth-name")
  // const email = localStorage.getItem("auth-email")
  return (
   <div className="text-3xl underline py-4">
     {/* <p>name: {name}</p>
     <p>email: {email}</p> */}
     <h1 className="text-3xl font-bold underline text-violet-600">
      Hello Joyenda!
    </h1>
     <p className="mt-5 px-10 text-lg">
        Joyenda Store is an innovative online marketplace designed to connect
        buyers and sellers seamlessly. With a user-friendly interface and a wide
        range of products, it aims to make shopping both convenient and
        enjoyable. Our platform prioritizes security, fast transactions, and
        responsive customer support, ensuring a trustworthy experience for
        everyone. Whether you are looking for everyday essentials or unique
        items, Joyenda Store brings everything you need right to your
        fingertips.
      </p>
  
   </div>
  );
}
