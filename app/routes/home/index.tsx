import React, { useState } from 'react';
import { Image, Smile, MapPin, Calendar, Video } from 'lucide-react';
import TwitterLayout from '~/components/layouts/MainLayout';

type User = {
  name: string;
  handle: string;
  avatar: string;
};

type TweetStats = {
  replies: number;
  retweets: number;
  likes: number;
  views: string;
};

type Tweet = {
  id: number;
  user: User;
  content: string;
  time: string;
  stats: TweetStats;
  image?: string;
};

const HomePage = () => {
  const [tweetText, setTweetText] = useState('');

  const dummyTweets = [
    {
      id: 1,
      user: {
        name: 'John Doe',
        handle: '@johndoe',
        avatar: '/api/placeholder/40/40'
      },
      content: 'Just deployed my first React application! 🚀 #webdev #react',
      time: '2h',
      stats: {
        replies: 12,
        retweets: 24,
        likes: 144,
        views: '2.4k'
      }
    },
    {
      id: 2,
      user: {
        name: 'Jane Smith',
        handle: '@janesmith',
        avatar: '/api/placeholder/40/40'
      },
      content: 'Beautiful morning in San Francisco! Perfect day for coding outside ☀️',
      image: '/api/placeholder/500/300',
      time: '4h',
      stats: {
        replies: 8,
        retweets: 16,
        likes: 95,
        views: '1.2k'
      }
    },
    {
      id: 3,
      user: {
        name: 'Tech News',
        handle: '@technews',
        avatar: '/api/placeholder/40/40'
      },
      content: 'Breaking: New JavaScript framework promises to revolutionize web development. Developers are excited about the possibilities this brings to the ecosystem.',
      time: '5h',
      stats: {
        replies: 45,
        retweets: 132,
        likes: 289,
        views: '12.5k'
      }
    }
  ];

  // Tweet composer component with improved responsiveness
  const TweetComposer = () => (
    <div className="border-b border-gray-800 px-4 py-2">
      <div className="flex gap-3">
        <img
          src="/api/placeholder/48/48"
          alt="Your avatar"
          className="w-10 h-10 rounded-full flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <textarea
            className="w-full bg-transparent border-b border-gray-800 resize-none mb-3 focus:outline-none focus:border-blue-500 text-lg min-h-[40px] py-2"
            placeholder="What's happening?"
            value={tweetText}
            onChange={(e) => setTweetText(e.target.value)}
          />
          <div className="flex items-center justify-between">
            <div className="flex -ml-2">
              <button className="p-2 hover:bg-blue-500/10 rounded-full">
                <Image className="w-5 h-5 text-blue-500" />
              </button>
              <button className="p-2 hover:bg-blue-500/10 rounded-full">
                <Video className="w-5 h-5 text-blue-500" />
              </button>
              <button className="p-2 hover:bg-blue-500/10 rounded-full sm:flex hidden">
                <Smile className="w-5 h-5 text-blue-500" />
              </button>
              <button className="p-2 hover:bg-blue-500/10 rounded-full sm:flex hidden">
                <Calendar className="w-5 h-5 text-blue-500" />
              </button>
              <button className="p-2 hover:bg-blue-500/10 rounded-full sm:flex hidden">
                <MapPin className="w-5 h-5 text-blue-500" />
              </button>
            </div>
            <button
              className={`px-4 py-1.5 rounded-full font-bold text-sm ${
                tweetText.length > 0
                  ? 'bg-blue-500 hover:bg-blue-600'
                  : 'bg-blue-500/50 cursor-not-allowed'
              }`}
              disabled={tweetText.length === 0}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Tweet component with improved responsiveness
  const Tweet = ({ tweet }: {tweet: Tweet}) => (
    <div className="border-b border-gray-800 px-4 py-3 hover:bg-gray-900/50 transition-colors cursor-pointer">
      <div className="flex gap-3 max-w-full">
        <img
          src={tweet.user.avatar}
          alt={tweet.user.name}
          className="w-10 h-10 rounded-full flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1 flex-wrap">
            <span className="font-bold hover:underline truncate">{tweet.user.name}</span>
            <span className="text-gray-500 truncate">{tweet.user.handle}</span>
            <span className="text-gray-500">· {tweet.time}</span>
          </div>
          <p className="text-[15px] break-words">{tweet.content}</p>
          {tweet.image && (
            <div className="mt-3 rounded-2xl overflow-hidden">
              <img
                src={tweet.image}
                alt="Tweet media"
                className="w-full h-auto object-cover max-h-[300px]"
              />
            </div>
          )}
          <div className="flex justify-between text-gray-500 mt-3 text-sm pr-8">
            <button className="flex items-center gap-1 hover:text-blue-500 group">
              <div className="p-1.5 rounded-full group-hover:bg-blue-500/10">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.615 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z" />
                </svg>
              </div>
              <span>{tweet.stats.replies}</span>
            </button>
            <button className="flex items-center gap-1 hover:text-green-500 group">
              <div className="p-1.5 rounded-full group-hover:bg-green-500/10">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z" />
                </svg>
              </div>
              <span>{tweet.stats.retweets}</span>
            </button>
            <button className="flex items-center gap-1 hover:text-pink-500 group">
              <div className="p-1.5 rounded-full group-hover:bg-pink-500/10">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z" />
                </svg>
              </div>
              <span>{tweet.stats.likes}</span>
            </button>
            <button className="flex items-center gap-1 hover:text-blue-500 group">
              <div className="p-1.5 rounded-full group-hover:bg-blue-500/10">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z" />
                </svg>
              </div>
              <span className="sm:inline hidden">{tweet.stats.views}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    // <TwitterLayout>

    <div className="max-w-full">
      <TweetComposer />
      {dummyTweets.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet} />
      ))}
    </div>
    //   </TwitterLayout>
  );
};

export default HomePage;