import { User } from './user.model';

describe('User', () => {
    let model: User;

    beforeEach(() => {
        model = new User();
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
    it('should correctly assign the property "uid"', () => {
        // Arrange
        const testUid = 'testUID';
        // Act
        model.uid = testUid;
        // Assert
        expect(model.uid).toEqual(testUid);
    });
    it('should correctly assign the property "email"', () => {
        // Arrange
        const testEmail = 'test@abv.bg';
        // Act
        model.email = testEmail;
        // Assert
        expect(model.email).toEqual(testEmail);
    });
    it('should correctly assign the property "password"', () => {
        // Arrange
        const testPass = 'testpass';
        // Act
        model.password = testPass;
        // Assert
        expect(model.password).toEqual(testPass);
    });
});
