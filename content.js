// Contact links and media assets

const workstation =
  'https://images.unsplash.com/photo-1758553026412-bc1da0ebd366?auto=format&fit=crop&w=1600&q=85';

const gym =
  'https://images.unsplash.com/photo-1734630341082-0fec0e10126c?auto=format&fit=crop&w=1200&q=85';

const podcast =
  'https://images.unsplash.com/photo-1688039763592-19d77744322e?auto=format&fit=crop&w=1200&q=85';

const sample =
  'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';

window.NUGI = {
  whatsapp: '',
  instagram: 'https://www.instagram.com/nugi.septadi/',
  email: '',

  clients: [
    {
      name: 'Andreas Tobing',
      icon: './andreas-tobing.png',
      description: 'AI Builder, Content Creator',
      instagram: 'https://www.instagram.com/andreasrtobing/',
      youtube: 'https://www.youtube.com/@andreasrtobing',
      tiktok: 'https://www.tiktok.com/@andreasrtobing'
    },

    {
      name: 'Kaizen Strength Gym',
      icon: './kaizen-strength-gym.png',
      description:
        'Private Training and Classes Friendly to Beginners and Seniors in Sidoarjo',
      instagram: 'https://www.instagram.com/kaizenstrengthgym/',
      tiktok: 'https://www.tiktok.com/@kaizenstrengthgym'
    },

    {
      name: 'Alex Rumondor',
      icon: './alex-rumondor.png',
      description: 'Web 3 Worker, F&B Enthusiast and Digital Agency',
      instagram: 'https://www.instagram.com/alexjrumondor/',
      youtube: 'https://www.youtube.com/@solusiinvestasi'
    }
  ],

  projects: [
    {
      name: 'Client 1',
      client: 'Kaizen Strength Gym',
      category: 'SHORT CONTENT',
      poster: gym,
      video: './short-kaizen-strength-gym.mp4'
    },

    {
      name: 'Client 2',
      client: 'Andreas Tobing',
      category: 'SHORT CONTENT',
      poster: workstation,
      video: './short-andreas-tobing.mp4'
    },

    {
      name: 'Client 3',
      client: 'Alex Rumondor',
      category: 'SHORT CONTENT',
      poster: podcast,
      video: './short-alex-rumondor.mp4'
    },

    {
      name: 'Long Form Video for Youtube',
      client: 'Andreas Tobing',
      category: 'LONG CONTENT',
      poster: workstation,
      video: './long-andreas-tobing.mp4'
    },

    {
      name: 'Podcast Video for Youtube',
      client: 'Andreas Tobing',
      category: 'PODCAST CONTENT',
      poster: podcast,
      video: './podcast-andreas-tobing.mp4'
    }
  ],

  testimonials: [
    {
      name: 'Andreas Tobing',
      initials: 'AT',
      text:
        'Nugi consistently delivers edits that match the style and direction of my content. He understands pacing, storytelling, and how to make content more engaging.'
    },

    {
      name: 'Kaizen Strength Gym',
      initials: 'KS',
      text:
        'Working with Nugi makes the content production process much easier. The edits are clean, engaging, and consistently aligned with our content style.'
    },

    {
      name: 'Alex Rumondor',
      initials: 'AR',
      text:
        'Nugi understands what makes a video engaging. He can take raw footage and turn it into polished content that feels professional and ready to publish.'
    }
  ]
};
