import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex bg-pentelope-beige text-pentelope-blue max-h-screen flex-col items-center justify-between p-24">
      <div className="font-bold pb-10 text-center">
        <div className="py-2 text-7xl underline">Pentelope</div>
        <div className="py-2 text-6xl">Lightweight Debian Based OS</div>
      </div>

      <div className="text-2xl font-bold pb-5">
        Just a (not so short) intro:{' '}
      </div>
      <div>
        The perfect computer operating system has been debated for a long time.
        But in turn, after decades of improvement and research, we have
        concluded that there is nothing called the
        <span className="font-bold">Perfect Operating System</span>. Windows and
        macOS had been the most prominent OS in the industry until 1991, when
        Linux arrived, which gave programmers not just a plethora of in-built
        features but reduced the size of the OS significantly to provide great
        computational power. Soon, there were numerous Linux distributions, such
        as FOSS, Red Hat, Debian, etc. Some very niche distributions are Kali
        and Linux. This paper discusses a Linux distribution built for
        programmers with a central focus on web development and penetration
        testing. The motive is to combine the tools required by programmers and
        penetration testers for the above-mentioned requirements. We have tried
        to build a lightweight Debian OS for web development and penetration
        testing called <span className="font-bold">Pentelope</span>. We make it
        lightweight by removing all the extra components a normal Linux
        distribution comes with, which act as bloatware, and putting in the
        required tools such as NodeJS, Git, and a few IDEs such as VS Code to
        choose from, along with the necessary Web Penetration Testing tools like
        Metasploit, Nmap and Burp Suite. We explore the computation power it
        provides and the size of the exported ISO file and compare it with other
        existing in OS/distributions. We also test how feasible it is to add new
        tools as necessary.
      </div>

      <div className="pb-5">
        <div className="text-2xl font-bold pt-10 py-5">
          Features of Pentelope
        </div>
        <ul>
          <li className="py-2">
            <span className="font-bold">➦</span> Pentelope focuses on Web
            Developers and Web Penetration Testers.
          </li>
          <li className="py-2">
            <span className="font-bold">➦</span> It contains all the pre-built
            tools required to perform the above mentioned tasks such as Visual
            Studio Code as text editors, Git as version control, NodeJS for web
            application development, Katoolin, and Burp-suite for web
            penetration testing.
          </li>
          <li className="py-2">
            <span className="font-bold">➦</span> It was built as a lightweight
            Operating system in order to be able to run on low-specs machines as
            well.
          </li>
        </ul>
      </div>

      <div className="animate-bounce bg-pentelope-blue px-14 py-2 text-white font-bold rounded-lg">
        <Link href="https://drive.google.com/file/d/16GhxwJCt5CMdaP2CzgPmMpgleMxnCYMK/view?usp=drive_link">
          ⬇️ Download ISO
        </Link>
      </div>
    </main>
  );
}
