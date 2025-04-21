// examples added, text could be modified
import React from 'react';
import TopicSection from './TopicSection';

const SshSection: React.FC = () => {
  return (
    <TopicSection
      title="SSH & SCP"
      description={`SSH allows us to secure login to remote servers. It is authenticated by keys. SCP uses SSH to 
securely transfer files between a local computer and a server. In class, I used it to upload my 
websites to catapult. I would need to securely copy my local datafiles and secure login with SSH 
to the catapult server then copy the files up. SSH keys work in pairs of a public and private key.  
Secure methods for remote server access and file transfer using SSH keys.`}
    >      
      <div className="space-y-6">
        <div className="bg-gray-800 p-6 rounded-lg text-white">
          <h3 className="text-xl font-semibold mb-3 text-white">SSH Key Authentication Example</h3>
          
          <div className="bg-gray-900 p-4 rounded overflow-x-auto">
            <pre className="text-sm text-gray-100">
              <code className="text-white">{`# Generating an SSH key pair
$ ssh-keygen -t ed25519 -C "twhite4@bates.edu"

Generating public/private ed25519 key pair.
Enter file in which to save the key (/home/twhite4/.ssh/id_ed25519): [Press Enter]
Enter passphrase (empty for no passphrase): [optional]
Enter same passphrase again:
Your identification has been saved in /home/twhite4/.ssh/id_ed25519
Your public key has been saved in /home/twhite4/.ssh/id_ed25519.pub


# Adding the SSH key to the ssh-agent
$ eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519


$ ssh-add ~/.ssh/id_ed25519

# Copy the SSH public key to the server
$ ssh-copy-id tommobat@bates01.catapult.bates.edu


# Or manually copy the key
$ cat ~/.ssh/id_ed25519.pub | ssh tommobat@bates01.catapult.bates.edu "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"


# Logging in with SSH key (no password needed)
$ ssh tommobat@bates01.catapult.bates.edu


# Using SCP to copy files securely
# Copy a local file to the remote server
$ scp /path/to/local/file.txt tommobat@bates01.catapult.bates.edu:/home/tommobat/public_html/

# Copy a remote file to local machine
$ scp tommobat@bates01.catapult.bates.edu:/home/tommobat/public_html/file.txt ~/Downloads/

# Copy an entire directory with -r (recursive)
$ scp -r /local/folder tommobat@bates01.catapult.bates.edu:/home/tommobat/public_html/
`}</code>
            </pre>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg text-white">
          <h3 className="text-xl font-semibold mb-3 text-white">Alias example for powershell to simplify this process</h3>
          
          <div className="bg-gray-900 p-4 rounded overflow-x-auto">
            <pre className="text-sm text-gray-100">
              <code className="text-white">{`deploysimple() {
  if [ -z "$1" ]; then
    echo "❌ Usage: deploysimple <foldername>"
    return 1
  fi

  tar czvf dist_files.tgz ./*
  ssh tommobat@bates01.catapult.bates.edu "mkdir -p ~/public_ht>  scp dist_files.tgz tommobat@bates01.catapult.bates.edu:~/publ>  ssh tommobat@bates01.catapult.bates.edu "cd ~/public_html/$1 >
}
`}</code>
            </pre>
          </div>
        </div>
          
        
        <div className="p-6 bg-gray-800 rounded-lg text-white">
          <h3 className="text-xl font-semibold mb-3 text-orange-300">Real-World Application</h3>
          <p className="text-white">During the semester, I used SSH and SCP to:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2 text-white">
            <li>Deploy web applications to Bates Catapult</li>
            <li>Set up automated deployment using SSH keys with aliases</li>
          </ul>
        </div>
      </div>
    </TopicSection>
  );
};

export default SshSection;
