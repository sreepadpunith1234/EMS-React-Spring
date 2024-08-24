

const FooterComponent = () => {
  return (
    <footer className="footer bg-dark text-white text-center py-3">
      <div className="container">
        <p>&copy; {new Date().getFullYear()}   Employee Management System. All rights reserved by punith.</p>
        <p>
          <a href="/privacy-policy" className="text-white">Privacy Policy</a> | 
          <a href="/terms-of-service" className="text-white"> Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default FooterComponent;
