var express = require('express');
var app = express();
var exphbs  = require('express-handlebars');

//
app.use(express.static('public'));
app.use('/components', express.static('bower_components'))
//
app.engine('hbs', exphbs({}));
app.set('view engine', 'hbs');
app.set("views", "./views");
//home
app.get('/hbs', function (req, res) {
  res.render("index", { title: "HBS Index Page", message: "Welcom Home Page"})
});
//Album
app.get('/album', function (req, res) {
	var albums = function(id, name, img, creator, view){
		this.id = id;
		this.name = name;
		this.img = img;
		this.creator = creator;
		this.view = view;
	};
	var gallery = [new albums('album1', 'Bộ ảnh nét đẹp nữ sinh 2017', '../images/image37.jpg', ' Ngọc Hân', '100'),
					new albums('album2','Bộ ảnh Lý Hạo Nam', '../images/image38.jpg', 'Cao Nhã Kỳ Duyên', '80'),
					new albums('album3','Bộ ảnh về ca sĩ Chi Dân', '../images/image39.jpg', 'Cao Thiên Phú', '150'),
					new albums('album4','Bộ ảnh nét đẹp nữ sinh 2016', '../images/image40.jpg', ' Ngô Thiết Nhân', '200'),
					new albums('album5','Bộ ảnh đặc biệt của nam ca sĩ Chi Dân', '../images/image41.jpg', 'Cao Thiên Ân', '500'),
					new albums('album6','Bộ ảnh nét đẹp nữ sinh 2015', '../images/image42.jpg', ' Trần Hữu Bình', '50')];

	res.render('album', {gallery: gallery,
                      title: "Albums",
                      message: "Welcom to Albums Page"
                      
                      });
});
//album1
app.get('/album1', function (req, res) {
	var albums = function(img, creator, view){
		this.img = img;
		this.creator = creator;
		this.view = view;
	};
	var gallery = [new albums('../images/image5.jpg', ' Ngọc Hân', '100'),
					new albums('../images/image2.jpg', 'Cao Nhã Kỳ Duyên', '80'),
					new albums('../images/image3.jpg', 'Cao Thiên Phú', '150'),
					new albums('../images/image4.jpg', ' Ngô Thiết Nhân', '200'),
					new albums('../images/image5.jpg', 'Cao Thiên Ân', '500'),
					new albums('../images/image6.jpg', ' Trần Hữu Bình', '50')];

	res.render('album1', {gallery: gallery,
                      title: "Albums",
                      message: "Welcom to Photos Page"                    
                      });
});
//album2
app.get('/album2', function (req, res) {
	var albums = function(img, creator, view){
		this.img = img;
		this.creator = creator;
		this.view = view;
	};
	var gallery = [new albums('../images/image7.jpg', ' Ngọc Hân', '100'),
					new albums('../images/image8.jpg', 'Cao Nhã Kỳ Duyên', '80'),
					new albums('../images/image9.jpg', 'Cao Thiên Phú', '150'),
					new albums('../images/image10.jpg', ' Ngô Thiết Nhân', '200'),
					new albums('../images/image11.jpg', 'Cao Thiên Ân', '500'),
					new albums('../images/image12.jpg', ' Trần Hữu Bình', '50')];

	res.render('album2', {gallery: gallery,
                      title: "Albums",
                      message: "Welcom to Photos Page"                    
                      });
});
//album3
app.get('/album3', function (req, res) {
	var albums = function(img, creator, view){
		this.img = img;
		this.creator = creator;
		this.view = view;
	};
	var gallery = [new albums('../images/image13.jpg', ' Ngọc Hân', '100'),
					new albums('../images/image14.jpg', 'Cao Nhã Kỳ Duyên', '80'),
					new albums('../images/image15.jpg', 'Cao Thiên Phú', '150'),
					new albums('../images/image16.jpg', ' Ngô Thiết Nhân', '200'),
					new albums('../images/image17.jpg', 'Cao Thiên Ân', '500'),
					new albums('../images/image18.jpg', ' Trần Hữu Bình', '50')];

	res.render('album3', {gallery: gallery,
                      title: "Albums",
                      message: "Welcom to Photos Page"   
                      });
});
//album4
app.get('/album4', function (req, res) {
	var albums = function(img, creator, view){
		this.img = img;
		this.creator = creator;
		this.view = view;
	};
	var gallery = [new albums('../images/image19.jpg', ' Ngọc Hân', '100'),
					new albums('../images/image20.jpg', 'Cao Nhã Kỳ Duyên', '80'),
					new albums('../images/image21.jpg', 'Cao Thiên Phú', '150'),
					new albums('../images/image22.jpg', ' Ngô Thiết Nhân', '200'),
					new albums('../images/image23.jpg', 'Cao Thiên Ân', '500'),
					new albums('../images/image24.jpg', ' Trần Hữu Bình', '50')];

	res.render('album4', {gallery: gallery,
                      title: "Albums",
                      message: "Welcom to Photos Page"             
                      });
});
//album5
app.get('/album5', function (req, res) {
	var albums = function(img, creator, view){
		this.img = img;
		this.creator = creator;
		this.view = view;
	};
	var gallery = [new albums('../images/image25.jpg', ' Ngọc Hân', '100'),
					new albums('../images/image26.jpg', 'Cao Nhã Kỳ Duyên', '80'),
					new albums('../images/image27.jpg', 'Cao Thiên Phú', '150'),
					new albums('../images/image28.jpg', ' Ngô Thiết Nhân', '200'),
					new albums('../images/image29.jpg', 'Cao Thiên Ân', '500'),
					new albums('../images/image30.jpg', ' Trần Hữu Bình', '50')];

	res.render('album5', {gallery: gallery,
                      title: "Albums",
                      message: "Welcom to Photos Page" 
                      });
});
//album6
app.get('/album6', function (req, res) {
	var albums = function(img, creator, view){
		this.img = img;
		this.creator = creator;
		this.view = view;
	};
	var gallery = [new albums('../images/image31.jpg', ' Ngọc Hân', '100'),
					new albums('../images/image32.jpg', 'Cao Nhã Kỳ Duyên', '80'),
					new albums('../images/image33.jpg', 'Cao Thiên Phú', '150'),
					new albums('../images/image34.jpg', ' Ngô Thiết Nhân', '200'),
					new albums('../images/image35.jpg', 'Cao Thiên Ân', '500'),
					new albums('../images/image36.jpg', ' Trần Hữu Bình', '50')];

	res.render('album6', {gallery: gallery,
                      title: "Albums",
                      message: "Welcom to Photos Page"                
                      });
});

//about
app.get('/about', function (req, res) {
  res.render("about", { title: "HBS About Page",
  						 message: "Welcom About Page"   
                      });
});
//blog
app.get('/blog', function (req, res) {

    var blog = function(name, avatar, views,title, noidung){
      this.name = name;
      this.avatar = avatar;
      this.views = views;
      this.title = title;
      this.noidung = noidung;
    };
    var blog_array=[
    new blog("Đặng Văn Trí", "../images/blog1.jpg",100,
    "Đớn đau vì chồng nhắn tin cho bồ lại gửi nhầm sang cho vợ", 
    "Tôi nóng bừng mặt khi đọc được những dòng tin nhắn lạ được gửi đến...."),
    new blog("Nguyễn Đang Tích", "../images/blog2.jpg",200,
    "Đớn đau vì chồng nhắn tin cho bồ lại gửi nhầm sang cho vợ", "Là phận dâu trưởng con trưởng nên vợ chồng tôi luôn ý thức....")
    ]
    res.render('blog',{
      title:"Blog",
      message:"Welcom to Blog Page",
      blog: blog_array
    });
});
//blog1
app.get('/blog1', function (req, res) {
  res.render("blog1", { title: "HBS Blog Page"
                      });
});
//blog2
app.get('/blog2', function (req, res) {
  res.render("blog2", { title: "HBS Blog Page"
                      });
});


app.listen(process.env.PORT || 3000);
=======
//
app.use(express.static('public'));
app.use('/components', express.static('bower_components'))


