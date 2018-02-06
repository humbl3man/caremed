const config = {
  showContactForm: true,
  formBaseURI: '//formspree.io/',
  contactEmail: 'caremedtransport@gmail.com',
  links: [
    {
      url: '/',
      label: 'Home'
    },
    {
      url: '/about',
      label: 'About Us'
    },
    {
      url: '/services',
      label: 'Services'
    },
    {
      url: '/contact',
      label: 'Contact'
    },
    {
      url: '/faq',
      label: 'FAQ'
    }
  ],
  yelp: {
    reviewsEndpoint:
			'https://wt-66c9916b5e85beaa2fb60ca3997833a6-0.run.webtask.io/caremed_api/reviews'
  }
};

export { config as default };
