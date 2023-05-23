// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import { render } from "@testing-library/react";
import Carousel from './Carousel';
import Card from './Card';

describe('smoke', function () {
    //{caption, src, currNum, totalNum}
    it("renders card without crashing", function () {
        // this is a low-value test, but better than nothing
        render(<Card caption='test' src='src.png' currNum={1} totalNum={3} />);
    });

    it("renders carousel without crashing", function () {
        // this is a low-value test, but better than nothing
        render(<Carousel
            photos={[
                {
                    src: "test-image1",
                    caption: "test-image1"
                }
            ]}

            title='test-title' />
        );
    });
});

describe('snapshot tests', function () {
    it("Card component matches snapshot", function () {
        const { container } = render(<Card 
            caption='test-caption' 
            src='src.png' 
            currNum={1} 
            totalNum={3} />);
            
        expect(container).toMatchSnapshot();
    });

    it("Carousel component matches snapshot", function () {
        const { container } = render(<Carousel
            photos={[
                {
                    src: "test-image1",
                    caption: "test-image1"
                }
            ]}

            title='test-title' />
        );
            
        expect(container).toMatchSnapshot();
    });
});
