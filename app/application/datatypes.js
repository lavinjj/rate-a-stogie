'use strict';

/**
 * Created with JetBrains WebStorm.
 * User: jim.lavin
 * Date: 11/22/12
 * Time: 9:44 AM
 * To change this template use File | Settings | File Templates.
 */
var rateastogie = rateastogie || {};

rateastogie.LogIn = function() {
    var self = this;
    self.userName = "";
    self.password = "";
};

rateastogie.User = function () {
    var self = this;
    self.UserName = "";
    self.FirstName = "";
    self.LastName = "";
    self.Email = "";
    self.Location = "";
    self.Bio = "";
    self.WebSite = "";
    self.Avatar = "";
    self.Photo = "";
    self.Password = "";
    self.DateJoined = "";
    self.DateLastActivity = "";
    self.userIsAdmin = false;
};

rateastogie.Cigar = function() {
    var self = this;
    self.Country = "";
    self.Manufacturer = "";
    self.Brand = "";
    self.Name = "";
    self.Shape = "";
    self.RingGauge = "";
    self.Length = "";
    self.Wrapper = "";
    self.Binder = "";
    self.Filler = "";
    self.Color = "";
    self.Strength = "";
    self.Appearance = "";
    self.Flavor = "";
    self.Smoke = "";
    self.OverallImpression = "";
    self.AverageRating = 0;
    self.NumberOfReviews = 0;
    self.DateCreated = "";
    self.DateUpdated = "";
};

rateastogie.Rating = function() {
    var self = this;
    self.CigarId = "";
    self.UserId = "";
    self.ReviewDate = "";
    self.Rating = 0;
    self.AppearanceRating = 0;
    self.Appearance = "";
    self.FlavorRating = 0;
    self.Flavor = "";
    self.SmokeRating = 0;
    self.Smoke = "";
    self.OverallImpressionRating = 0;
    self.OverallImpression = "";
    self.Comments = "";
};