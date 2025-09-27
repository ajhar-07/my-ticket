

1.What is JSX, and why is it used?

JSX হচ্ছে JavaScript XML।এটা দেখতে  HTML এর মতো লাগে, কিন্তু আসলে জাভাস্ক্রিপ্টের মধ্যে HTML লিখার একটা সুবিধাজনক সিস্টেম। ব্যবহার করা হয় কারণ এতে কোড পড়তে সহজ হয়, আর React এর কম্পোনেন্ট বানানো আরও clean হয়।

2.What is the difference between State and Props?
 --State হলো - একটি হুক যা কম্পোনেন্টের নিজের ডাটা, যা সময়ের সাথে সাথে পরিবর্তন হয়। 
 
 --Props বাইরে থেকে Parent => Child পাঠানো ডাটা, যেটা কম্পোনেন্ট শুধু read করতে পারে, পরিবর্তন করতে পারে না।

3.What is the useState hook, and how does it work?
useState হলো React এর একধরনের Hook, যেটা দিয়ে কম্পোনেন্টের ভিতরে state তৈরি আর আপডেট করা যায়। const [Card, setCard] = useState([]); এখানে Card হলো state value, আর setCard হলো সেই value পরিবর্তন করার ফাংশন।

4.How can you share state between components in React?
State সাধারণত parent component এ রাখা হয়, তারপর সেটা props দিয়ে child component গুলাতে পাঠানো হয়। সাধারণ তো একে Lifting State Up নামে পরিচিতো।

5.How is event handling done in React?
React এ ইভেন্ট হ্যান্ডলিং একদম HTML এর মতো, কিন্তু camelCase ব্যবহার করতে হয়। react এ দুটি ইভেন্ট হ্যান্ডলিং ব্যাবহার করা হয় তাহলো
Click Me,<button onClick={()=>handleClick()}>Click Me</button>



এখানে onClick হলো ইভেন্ট, আর handleClick হলো ফাংশন যেটা চালু হবে যখন ক্লিক করা হবে।