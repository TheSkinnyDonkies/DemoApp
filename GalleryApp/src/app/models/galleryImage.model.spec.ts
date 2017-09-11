import { GalleryImage } from './galleryImage.model';

describe('GalleryImage', () => {
    let model: GalleryImage;

    beforeEach(() => {
        model = new GalleryImage();
    });

    it('should be created successfully', () => {
        // Arrange, Act & Assert
        expect(model).toBeTruthy();
    });
    it('should correctly assign the property "$key"', () => {
        // Arrange
        const testKey = 'testKey';
        // Act
        model.$key = testKey;
        // Assert
        expect(model.$key).toEqual(testKey);
    });
    it('should correctly assign the property "name"', () => {
        // Arrange
        const testName = 'testName';
        // Act
        model.name = testName;
        // Assert
        expect(model.name).toEqual(testName);
    });
    it('should correctly assign the property "url"', () => {
        // Arrange
        const testUrl = 'testUrl/url/dir';
        // Act
        model.url = testUrl;
        // Assert
        expect(model.url).toEqual(testUrl);
    });
    it('should correctly assign the property "uploadedOn"', () => {
        // Arrange
        const testUploadedOn = '10/12/2018';
        // Act
        model.uploadedOn = testUploadedOn;
        // Assert
        expect(model.uploadedOn).toEqual(testUploadedOn);
    });
    it('should correctly assign the property "uploadedBy"', () => {
        // Arrange
        const testUploadedBy = 'testName';
        // Act
        model.uploadedBy = testUploadedBy;
        // Assert
        expect(model.uploadedBy).toEqual(testUploadedBy);
    });
});
