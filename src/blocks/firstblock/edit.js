/**
 * WordPress dependencies
 */
const { Fragment, useEffect } = wp.element;
import {
	InspectorControls,
	PanelColorSettings,
	RichText,
	useBlockProps,
} from '@wordpress/block-editor';
import {
	BoxControl,
	GradientPicker,
	PanelBody,
	SelectControl,
	TextControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

// editor style
import './editor.scss';

/**
 * Internal dependencies
 */

/**
 * Edit function
 */

export default function Edit({ attributes, setAttributes }) {
	const { text, tags, textcolor, backgroundcolor, divPaddings } = attributes;

	console.log(divPaddings);
	return (
		<Fragment>
			{/* Inspector Controls in the sidebar */}
			<InspectorControls>
				<PanelBody
					title={('Post Title', 'blockdev')}
					initialOpen={true}
				>
					<TextControl
						__nextHasNoMarginBottom
						label="Title"
						help="Enter some text"
						value={text}
						onChange={(value) =>
							setAttributes({
								text: value,
							})
						}
					/>
					<BoxControl
						values={divPaddings}
						label="Padding Settings"
						onChange={(newPadding) =>
							setAttributes({ divPaddings: newPadding })
						}
					/>
					<SelectControl
						label="Size"
						value={tags}
						options={[
							{ label: 'h1', value: 'h1' },
							{ label: 'h2', value: 'h2' },
							{ label: 'h3', value: 'h3' },
							{ label: 'h4', value: 'h4' },
							{ label: 'h5', value: 'h5' },
							{ label: 'h6', value: 'h6' },
							{ label: 'p', value: 'p' },
						]}
						onChange={(value) =>
							setAttributes({
								tags: value,
							})
						}
					/>
				</PanelBody>
				<PanelBody
					title={__('Color Settings', 'blockdev')} // Title for the panel
					initialOpen={false} // Control whether the panel is open by default
				>
					<PanelColorSettings
						title={__('Text Color Settings', 'blockdev')}
						colorSettings={[
							{
								value: textcolor,
								label: __('Text Color', 'blockdev'),
								onChange: (value) =>
									setAttributes({ textcolor: value }),
							},
						]}
					/>

					<p>Background Color</p>
					<GradientPicker
						value={backgroundcolor}
						onChange={(value) =>
							setAttributes({ backgroundcolor: value })
						}
					/>
				</PanelBody>
			</InspectorControls>
			<div
				{...useBlockProps({
					className: 'rejutestinghere',
				})}
				style={{
					background: backgroundcolor,
				}}
			>
				<RichText
					tagName={tags}
					value={text}
					onChange={(value) =>
						setAttributes({
							text: value,
						})
					}
					placeholder={__('Heading…')}
					style={{
						color: textcolor,
					}}
				/>
			</div>
		</Fragment>
	);
}
